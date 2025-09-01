import React from "react";

export const StarBackground = () => {
  return (
    <>
      {/* Background CSS */}
      <style>{`
        .star-bg {
          position: fixed;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          background: linear-gradient(-45deg, #0f2027, #203a43, #2c5364, #0f2027);
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Background Div */}
      <div className="star-bg" />
    </>
  );
};
