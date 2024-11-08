const Form = (prop) => {
  return (
    <form>
      <label htmlFor="">name</label>
      <input type="text" placeholder={prop.n} />
      <button>submit</button>
    </form>
  );
};

export default Form;
