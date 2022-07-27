import Database from "../../components/Database";

export default async function handler(req, res) {
  if(req.method === 'POST') {

    const insertPage = await Database.insertOne('Pagine', req.body);

    if(insertPage.acknowledged) {
      res.status(201).json({ msg: "Pagina creata", id: insertPage.insertedId});
    } else {
      res.status(201).json({ msg: "C'è stato un errore" });
    }
  }
}
