import "../css/FreeLessons.css";

export const FreeLessons = () => {
  const videoLessonArray = [
    {
      source: "https://www.youtube.com/embed/VzIkoH5VXrs?si=VMCkt2Jj2jseN3vi",
      title: "Advanced Guitar Lesson - Arpeggio Substitution - Maj7 over m7",
    },
    {
      source: "https://www.youtube.com/embed/DxSTN3kHTDM?si=RMMyScZf-dWHZ_1i",
      title: "Rythm Guitar Lesson - Getting Your Funk On - Squeeze/Release",
    },
    {
      source: "https://www.youtube.com/embed/Qykqk5z1xYE?si=IQwgkNN_AzlCc1mr",
      title: "The Blues Scale",
    },
    {
      source: "https://www.youtube.com/embed/foBZan2J420?si=7tsdBt9AEzJzwq_R",
      title:
        "Advanced Guitar Lesson - String Skipping with Alternate Picking Lick - Petrucci/Morse Style",
    },
    {
      source: "https://www.youtube.com/embed/XbSq44EW5c8?si=tfxbK_4RFDGg3yr8",
      title:
        "Advanced Guitar Lesson - Tapping & String Skipping Lick - Govan, Petrucci, Vai, Howe Style",
    },
    {
      source: "https://www.youtube.com/embed/83Ml9I9u4Y0?si=KBTpzrZwQ37Q6gHA",
      title:
        "Advanced Guitar Lesson - Sweep Picking/Tapping Lick - Govan, Howe, Kotzen, Gambale Style",
    },
    {
      source: "https://www.youtube.com/embed/rug3aMFB0jg?si=_KOFCaMgvEmcc3yD",
      title:
        "Beginner Guitar Lesson - Using My Name, GABE, To Help Learn The Notes On The Fretboard",
    },
    {
      source: "https://www.youtube.com/embed/FnrbM9TqPwc?si=Hh0gvaG9DMeIUEaY",
      title:
        "Beginner Guide to Lead Guitar Part 1 - The Minor Pentatonic Scale",
    },
    {
      source: "https://www.youtube.com/embed/7RJY0IXXOHY?si=8pESC-ZIaesj6GJP",
      title:
        "Beginner Guitar Lesson - Speed Exercises, Alternate Picking, Chromatic Exercises",
    },
    {
      source: "https://www.youtube.com/embed/TB9mdbB4PDY?si=3LBBeREX-N3NZ3Zi",
      title:
        "Beginner Guitar Lesson - String Skipping Exercise - Inside/Outside Picking",
    },
    {
      source: "https://www.youtube.com/embed/qccn2Ihbnac?si=1gXnWP62ROgZqCnJ",
      title: "Guitar Lesson - Legato Workout - 3 Finger Combinations",
    },
    {
      source: "https://www.youtube.com/embed/TsPkSfUdQgs?si=_J39iqCxP4AlEKRl",
      title:
        "Guitar Lesson - Satriani, Petrucci, Vai Style - 3 Notes Per String Legato Licks",
    },
  ];

  const mapIframes = videoLessonArray.map((video) => {
    return (
      <span
        key={video.title}
        id="individual-lesson-video-iframe"
        style={{
          margin: "5px",
        }}
      >
        <iframe
          src={video.source}
          title={video.title}
          width={"90%"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p className="video-lesson-array-titles">{video.title}</p>
      </span>
    );
  });

  return (
    <div>
      {/* <h1>Free Video Lessons</h1> */}
      <div
        id="mapped-video-array"
        style={{
          margin: "auto",
        }}
      >
        {mapIframes}
      </div>
    </div>
  );
};
