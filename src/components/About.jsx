import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full  bg-gradient-to-b from-gray-800 to-black text-white h-screen"
    >
      <div className="max-w-screen-lg  p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia rem
          animi inventore, sequi perspiciatis culpa libero. Incidunt autem
          asperiores fugit quis explicabo consequatur ex magni libero dolorum ad
          aut doloribus totam, sit vel eligendi dolores? Officia quia,
          perferendis doloremque hic consectetur pariatur nam ratione
          exercitationem accusamus sed amet quae neque.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          provident rerum aliquam, quod nemo unde? Doloremque adipisci soluta
          deserunt eos quia totam, dignissimos, quidem culpa nulla sed
          voluptatibus assumenda nam eius illum quas ex sint inventore modi
          labore natus. Iure voluptas quae unde quos maiores sit iusto vitae
          delectus quis?
        </p>
      </div>
    </div>
  );
};

export default About;
