
import { useContext } from "react";
import { StoreContext } from "./RootStore";

/**
 * Component 안에서 사용하는 store
 */
const useStore = () => useContext(StoreContext);

export default useStore;