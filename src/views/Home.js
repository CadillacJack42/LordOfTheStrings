import "../css/Home.css";

export const Home = () => {
  return (
    <div id="home-container">
      <h1>Home</h1>
      <p>Welcome to Lord of the Strings!</p>
      <img
        src="./gabeIsaac.jpg"
        alt="Gabe playing guitar on stage"
        id="homepage-gabe-pic"
      ></img>
      <p>
        Hello! My name is Gabriel Isaac. Thanks for visting my music lesson
        site.
      </p>
      <p>
        I am a professional musician with multiple graduate degrees in music and
        various recording credits, and have offered guitar, bass, ukulele, ear
        training, songwriting, and music theory lessons in person and online for
        the last 20 years. I believe that with my expert guidance, each of my
        students can become a<i>"Lord of the Strings"</i> .
      </p>
      <p>
        So if you are looking for high quality guitar and music lessons that
        cover a range of topics including basic chords, strum patterns,
        fingerpicking, funk-style strumming, bluesy bends, aggressive metal
        riffs, arpeggios, extended jazz chords, sweep picking, tapping,
        improvisation, technical proficiency, sight reading, theory and ear
        training, then you've come to the right place. Or maybe you want to
        learn to play that one song you've wanted to forever - from the most
        difficult Van Halen solo, to a simple folk tune. Or perhaps, you want to
        learn to write your own music, I cover that as well.
      </p>
      <p>
        So, click the links on the side to read testimonials from my students,
        more about me and my teaching philosophy, rates, and check out some FREE
        video lessons.
      </p>
      <iframe
        className="instagram-media instagram-media-rendered"
        id="instagram-embed-0"
        title="Embedded-Instagram-Profile"
        src="https://www.instagram.com/gabe_teaches_guitar/embed/?cr=1&amp;v=14&amp;wp=540&amp;rd=https%3A%2F%2Fwww.thelordofthestrings.com&amp;rp=%2Findex.html#%7B%22ci%22%3A0%2C%22os%22%3A1662%2C%22ls%22%3A33.30000019073486%2C%22le%22%3A56.40000009536743%7D"
        allowtransparency="true"
        allowFullScreen={true}
        height="410"
        data-instgrm-payload-id="instagram-media-payload-0"
        style={{
          background: "white",
          width: "30%",
          maxWidth: "540px",
          borderRadius: "3px",
          border: "1px solid rgb(219, 219, 219)",
          boxShadow: "none",
          display: "block",
          margin: "0px 0px 12px",
          minWidth: "326px",
          padding: "0px",
        }}
      ></iframe>
      {/* <img></img> */}
    </div>
  );
};
