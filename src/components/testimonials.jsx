import React from "react";
import Comment from "./comment";

const Testimonials = () => {
  return (
    <div className="p-4 bg-cyan-300 text-center rounded-xl md:rounded-t-lg md:rounded-b-[60%]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg font-medium">Client's Stories</h2>
        <h3 className="text-2xl  mb-4">
          What our <strong className="font-extrabold">Beloved Customers</strong> Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          <div className="flex justify-center">
            <Comment
              rating={5}
              username={"Jenny Wilson"}
              content={"Enjoyed the app!"}
            />
          </div>
          <div className="flex justify-center">
            <Comment
              rating={5}
              username={"Mark Mutua"}
              content={"Found the love of my life"}
            />
          </div>
          <div className="flex justify-center">
            <Comment
              rating={5}
              username={"Zakayo "}
              content={"Grew a lot from sharing my skills "}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
