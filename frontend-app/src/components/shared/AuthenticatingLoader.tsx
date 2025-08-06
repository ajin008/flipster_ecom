import { motion } from "framer-motion";

const AuthenticatingLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      {/* Background gaming glow effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(108, 43, 217, 0.15) 0%, transparent 70%)",
        }}
      ></div>

      <div className="relative z-10">
        {/* Outer rotating ring with gaming colors */}
        <motion.div
          className="w-32 h-32 border-4 border-transparent rounded-full"
          style={{
            borderTopColor: "#6C2BD9",
            borderRightColor: "#FF61D2",
            filter: "drop-shadow(0 0 20px rgba(108, 43, 217, 0.4))",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner pulsing circle with gaming gradient */}
        <motion.div
          className="absolute inset-4 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #6C2BD9 0%, #FF61D2 100%)",
            boxShadow: "0 0 20px rgba(108, 43, 217, 0.4)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Lock icon */}
          <motion.svg
            className="w-8 h-8 text-white drop-shadow-lg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </motion.svg>
        </motion.div>

        {/* Floating particles with gaming colors */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor:
                i % 3 === 0 ? "#6C2BD9" : i % 3 === 1 ? "#FF61D2" : "#FFA726",
              boxShadow: `0 0 10px ${i % 3 === 0 ? "rgba(108, 43, 217, 0.3)" : i % 3 === 1 ? "rgba(255, 97, 210, 0.3)" : "rgba(255, 167, 38, 0.3)"}`,
              top: "50%",
              left: "50%",
              transformOrigin: `0 ${80 + i * 10}px`,
            }}
            animate={{
              rotate: 360,
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}

        {/* Text animation with gaming theme */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-center"
            style={{
              background:
                "linear-gradient(135deg, #6C2BD9 0%, #A55FFF 50%, #C3B1E1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Authenticating
          </motion.h2>

          {/* Animated dots with gaming colors */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    i === 0 ? "#6C2BD9" : i === 1 ? "#FF61D2" : "#FFA726",
                  boxShadow: `0 0 10px ${i === 0 ? "rgba(108, 43, 217, 0.3)" : i === 1 ? "rgba(255, 97, 210, 0.3)" : "rgba(255, 167, 38, 0.3)"}`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Success checkmark with gaming success color */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          // You can trigger this animation when auth is successful
          // animate={{ scale: 1, opacity: 1 }}
        >
          <motion.div
            className="rounded-full p-4"
            style={{
              backgroundColor: "#4CAF50",
              boxShadow: "0 0 30px rgba(108, 43, 217, 0.5)",
            }}
          >
            <motion.svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>

      {/* Additional floating elements for more gaming feel */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full opacity-20"
        style={{ backgroundColor: "#A55FFF" }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.6, 0.2],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 rounded-full opacity-30"
        style={{ backgroundColor: "#FF85FF" }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.8, 0.3],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  );
};

export default AuthenticatingLoader;
