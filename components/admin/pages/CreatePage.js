import { useRef } from "react";
import PageSettings from "./PageSettings";

export default function CreatePage(props) {
  const statusRef = useRef();
  const titleRef = useRef();
  const meta_titleRef = useRef();
  const meta_descriptionRef = useRef();
  const canonical_urlRef = useRef();
  const contentRef = useRef();
  const slugRef = useRef();
  const featured_imageRef = useRef();
  const categoryRef = useRef();
  const creatted_dateRef = useRef();
  const modified_dateRef = useRef();
  const languageRef = useRef();
  const language_relationRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const pagestatus = statusRef.current.value;
    const title = titleRef.current.value;
    const meta_title = meta_titleRef.current.value;
    const meta_description = meta_descriptionRef.current.value;
    const canonical_url = canonical_urlRef.current.value;
    const content = contentRef.current.value;
    const slug = slugRef.current.value;
    const featured_image = featured_imageRef.current.value;
    const category = categoryRef.current.value;
    const creatted_date = creatted_dateRef.current.value;
    const modified_date = modified_dateRef.current.value;
    const language = languageRef.current.value;
    const language_relation = language_relationRef.current.value;

    const pageData = {
      status: pagestatus,
      title: title,
      meta_title: meta_title,
      meta_description: meta_description,
      canonical_url: canonical_url,
      content: content,
      slug: slug,
      featured_image: featured_image,
      category: category,
      creatted_date: creatted_date,
      modified_date: modified_date,
      language: language,
      language_relation: language_relation,
    };

    props.onAddPage(pageData);
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <PageSettings
          status={statusRef}
          titleRef={titleRef}
          meta_titleRef={meta_titleRef}
          meta_descriptionRef={meta_descriptionRef}
          canonical_urlRef={canonical_urlRef}
          slugRef={slugRef}
          featured_imageRef={featured_imageRef}
          categoryRef={categoryRef}
          creatted_dateRef={creatted_dateRef}
          modified_dateRef={modified_dateRef}
          languageRef={languageRef}
          language_relationRef={language_relationRef}
        />
        <br />
        <textarea ref={contentRef} />
        <button>submit</button>
      </form>
    </>
  );
}
