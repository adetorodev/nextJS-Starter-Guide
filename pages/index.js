import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I am currently working as Software Engineer at <a href="https://opexconsult.com/">Opex Consult</a>. I am a self taught developer, Love researching and building things to solve problem</p>
        <p>
          I love exploring new technologies and being a professional, I like to
          stay on top of latest trends. I try to leave every line of code I
          write more Maintainable, Scalable, Testable and Secure.
        </p>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Skills</h2>
        <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>JavaScript</li>
        <li className={utilStyles.listItem}>TypeScript</li>
        <li className={utilStyles.listItem}>React.Js</li>
        <li className={utilStyles.listItem}>Next.Js</li>
        <li className={utilStyles.listItem}>Node.Js</li>
        </ul>
      </section> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
