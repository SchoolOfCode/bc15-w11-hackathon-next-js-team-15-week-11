import CustomButton from "../../../components/CustomButton";

export default function Adam() {

  
    return (
    <>
      <h1>Hello</h1>
      <div>
      <CustomButton url={'/venus'} left />
      <br />
      <CustomButton url={'/mars'} right />
      </div>
    </>
  );
}
