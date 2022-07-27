import CreatePage from "../../../components/admin/pages/CreatePage";

export default function Create() {
  async function addPageHandler(enteredData) {
    const res = await fetch("/api/new-page", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log(data);
  }

  return <CreatePage onAddPage={addPageHandler} />;
}
