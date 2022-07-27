
export default function PageSettings(props) {
  return (
    <div>
          <input type="text" ref={props.status} /><br />
          <input type="text" ref={props.titleRef} /><br />
          <input type="text" ref={props.meta_titleRef} /><br />
          <input type="text" ref={props.meta_descriptionRef} /><br />
          <input type="text" ref={props.canonical_urlRef} /><br />
          <input type="text" ref={props.slugRef} /><br />
          <input type="text" ref={props.featured_imageRef} /><br />
          <input type="text" ref={props.categoryRef} /><br />
          <input type="text" ref={props.creatted_dateRef} /><br />
          <input type="text" ref={props.modified_dateRef} /><br />
          <input type="text" ref={props.languageRef} /><br />
          <input type="text" ref={props.language_relationRef} /><br />
    </div>
  );
}
