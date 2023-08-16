import useMenu from "./useMenu";

const useFilter = (name) => {
  const [menu] = useMenu();
  const items = menu.filter((item) => item.category === name);
  return items;
};

export default useFilter;
