import PersonalInfo from "../components/About/PersonalInfo";
import Head from "../components/About/Head";
import GithubActivity from "../components/GithubActivity";
import Reviews from "../components/About/Reviews";
import Connect from "../components/About/Connect";

export default function About() {


  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-700 w-screen">
      <Head />
      <div className="xl:p-20">
        <div className="grid lg:grid-cols-2 gap-4">
          <PersonalInfo />
          <GithubActivity username={"sankar110000"}/>
          <Reviews/>
          <Connect/>
        </div>
      </div>
    </div>
    
  );
}
