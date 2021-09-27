import * as React from "react"
import Banner from "../components/banner"
import Navbar from "../components/navbar/index"
import AboutSection from "../components/aboutSection"
import CallToAction from "../components/CallToAction/index"
import Footer from "../components/footer"

// markup
const IndexPage = () => {
  return (
    <main >
      <Banner />
      <Navbar />
      {/* <h1 className="text-gray-900 text-5xl text-center m-12">Get your new pup soon </h1> */}
      <AboutSection />
      <CallToAction />
      <Footer />
    </main>
  )
}

export default IndexPage
