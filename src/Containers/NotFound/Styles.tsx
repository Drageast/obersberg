// Luca 100
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

import * as Var from "../../Utilities/Variables";

export const CustomForeground1 = css`
    flex-direction: column;

    code {
        font-size: 1.5em;
        color: ${Var.Primary()};
    }

    h2 {
        color: ${Var.Secondary()};
        border: 0.1rem solid ${Var.Secondary()};
        padding: 0.3rem;
        border-radius: 0.5rem;
    }
`;

const LoadingStyle = styled(motion.div)`
    height: 6rem;
    background-image: linear-gradient(${Var.Secondary()}, ${Var.Primary()});
    width: 6rem;
    border-radius: 2% 50%,
`;

export const LoadingAnimation = () => {
    return (
        <LoadingStyle animate={{
            rotate: 360,
            borderRadius: [ "50% 50%", "2% 50%"],
            x: 150
        }}
        initial={{
            x: -150
        }}
        transition={{
            flip: Infinity,
            duration: 4,
            ease: "easeInOut",
        }}
        whileHover={{
            scale: 1.4
        }}
        />
    );
}

export {}