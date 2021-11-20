// Luca 100%

import { motion } from "framer-motion";
import styled from "styled-components";

import { IMotion } from "../Interfaces/Motion";

export const StyledButton1 = styled(motion.div)<IMotion>`
    text-decoration: none;
    ${props => props.CustomCSS};
`;
