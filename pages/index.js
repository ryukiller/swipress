import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Database from "../components/Database";
var ObjectId = require('mongodb').ObjectId;

/*

<ul>
      {props.users.map((user) => (
        <Users key={user.id} id={user.id} title={user.username} />
      ))}
    </ul>
    */

function Users(props) {
  return <li id={props.id}>{props.title}</li>;
}
export default function Home(props) {
   
  return (
    <>
    <Head>
    <meta charSet="utf-8" />
    <title>{props.title}</title>
    </Head>
    <div dangerouslySetInnerHTML={{ __html: props.contenuto }} />
    </>
  );
}
export async function getStaticProps(context) {
  const pagine = await Database.findOne("Pagine", {"_id": new ObjectId('62cd39b5b205744f8f8da25c')});
  return {
    props: {
      contenuto: pagine.content,
      title: pagine.title
      /*users: users.map((user) => ({
        username: user.username,
        id: user._id.toString(),
      })),*/
    }, // will be passed to the page component as props
  };
}
