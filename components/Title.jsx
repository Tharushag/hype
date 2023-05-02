function Title(props) {
  return (
    <div className='title'>
      <h1 className='text title__text'>{ props.text }</h1>
      <hr className='border title__line' />
    </div>
  );
}

export default Title;
