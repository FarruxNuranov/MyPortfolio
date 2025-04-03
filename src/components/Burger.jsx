
import { useDispatch, useSelector } from "react-redux";
import { getActive } from "../store/project/projectSlice";

const Burger = () => {

 const dispatch = useDispatch()
 
 const {active} = useSelector((state) => state.project)


 





  return (
    <>
    <div
      onClick={() => dispatch(getActive())}
      className={`header__burger${active ? " active" : ""}`}
      >
      <span className="header__burger_line"></span>
      <span className="header__burger_line"></span>
      <span className="header__burger_line"></span>
    </div>



    
      
      </>
    
  );
};

export default Burger