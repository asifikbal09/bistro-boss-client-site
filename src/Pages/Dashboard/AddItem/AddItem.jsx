import { useForm } from "react-hook-form";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import Swal from "sweetalert2";

const AddItem = () => {
  const imageUrlToken = import.meta.env.VITE_Image_Url_token;
  console.log(imageUrlToken);
  const imageHostingURL = `https://api.imgbb.com/1/upload?key=${imageUrlToken}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(imageHostingURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          console.log(imgURL);
          const { name, recipe, price, category } = data;
          const newItem = {
            name,
            recipe,
            price: parseFloat(price),
            category,
            image: imgURL,
          };
          console.log(newItem);
          axios.post("http://localhost:5000/menu", newItem).then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Added a New Item By Admin",
                showConfirmButton: true,
                timer: 2000,
              });
              reset();
            }
          });
        }
      });
  };
  console.log(errors);
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading={"What's new?"}
      ></SectionTitle>
      <Helmet>
        <title>Bistro Boss | Add Item</title>
      </Helmet>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-100 p-10 shadow">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="md:flex gap-5">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              defaultValue="Category"
              className="select select-bordered"
              {...register("category", { required: true })}
            >
              <option disabled>Category</option>
              <option>salad</option>
              <option>pizza</option>
              <option>soup</option>
              <option>drinks</option>
              <option>dessert</option>
            </select>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full "
              {...register("price", { required: true, maxLength: 10 })}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-28"
            placeholder="Recipe Details"
            {...register("recipe", { required: true})}
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Image*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            {...register("image", { required: true })}
          />
        </div>
        {/* background: linear-gradient(90deg, #835D23 0%, #B58130 100%); */}
        <input
          className="mt-5 btn btn-sm btn-outline font-semibold "
          type="submit"
          value={'Add Item'}
        />
      </form>
    </div>
  );
};

export default AddItem;
