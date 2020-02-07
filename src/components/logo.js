import React from "react"
import { motion } from 'framer-motion'

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: .5,
      delayChildren: .2,
    },
  },
}
const item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1],
  },
}
const text = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 1],
  },
}
  

const Logo = () => (
    
    <motion.svg
    variants={container}
    initial="hidden" 
    animate="visible"
	width="100%" height="100%" className="logo"
	version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 5042.04 995.5">
        
        <motion.path 
            variants={item}
            transition={{ease: "easeOut", duration: 3}}
			d="M767.91,426.85c-3.51-11.1-7.01-22.26-11.51-32.98c-6.52-15.52-15.54-29.64-25.49-43.28
	c-10.38-14.25-22.56-26.65-35.65-38.29c-12.39-11.02-26.24-19.87-40.53-28.21c-14.89-8.68-30.64-15.27-46.85-20.79
	c-4.11-1.4-4.5-3-3.49-6.55c3.4-11.9,6.67-23.84,9.89-35.79c3.97-14.73,7.79-29.5,11.75-44.23c2.46-9.13,5.13-18.19,7.59-27.32
	c3.9-14.42,7.62-28.89,11.57-43.3c2.54-9.26,5.5-18.4,8.03-27.67c5.06-18.56,9.96-37.17,14.89-55.76
	c1.38-5.19,2.66-10.41,4.22-16.52c-3.62,0-6.14,0-8.66,0c-83.81,0-167.62,0-251.43,0c-3.55,0-7.1-0.13-10.63,0.1
	c-1.2,0.08-2.91,0.8-3.4,1.74c-1.47,2.8-2.76,5.77-3.56,8.82c-3.37,12.72-11.27,22.47-20.61,31.1
	c-8.76,8.09-18.56,14.76-29.83,19.05c-11.9,4.53-23.47,10.24-35.69,13.5c-13.91,3.71-28.3,6.14-42.64,7.56
	c-20.13,2-40.4,2.69-60.62,3.62c-4.71,0.22-7.77-0.28-9.12,6.26c-2.59,12.48-7.25,24.53-10.78,36.83
	c-3.58,12.44-6.68,25.03-10.29,37.46c-4.59,15.8-9.55,31.49-14.2,47.28c-0.94,3.17-1.21,6.54-1.94,10.7c41.01,0,81.32,0,122.08,0
	c-0.33,2.41-0.37,4.03-0.79,5.55c-3.82,14.06-7.88,28.07-11.47,42.19c-1.02,4.03-2.82,4.87-6.69,4.65
	c-21.66-1.25-42.9,0.52-63.61,7.9c-12.29,4.38-23.81,9.9-34.66,17.06c-14.43,9.52-27,20.96-37.38,34.82
	c-9.26,12.37-16.85,25.59-21.91,40.24c-4.79,13.88-8.31,27.96-8.95,42.74c-0.9,20.93,1.58,41.22,8.77,61.04
	c4.81,13.26,11.31,25.49,19.25,37.03c7.77,11.29,17.26,21.07,27.96,29.54c9.88,7.82,19.99,15.42,32.1,19.76
	c3.81,1.37,6.07,3.95,4.23,8.49c-1.08,2.66-1.92,5.44-2.65,8.22c-2.61,9.91-5.07,19.85-7.69,29.75
	c-3.62,13.62-7.37,27.21-11.01,40.83c-2.39,8.96-4.61,17.96-7.03,26.9c-3.59,13.27-7.31,26.5-10.92,39.77
	c-2.56,9.42-5.13,18.84-7.49,28.32c-0.76,3.07-1.87,4.23-4.95,2.63c-9.8-5.08-20.05-9.44-29.38-15.26
	c-14.05-8.77-26.6-19.7-37.19-32.41c-14.35-17.24-25-36.72-31.1-58.43c-5.84-20.79-8.19-41.96-6.68-63.57
	c1.33-19.04,4.86-37.61,10.78-55.74c1.72-5.28,3.22-10.63,4.82-15.95c-0.48-0.2-0.96-0.41-1.45-0.61
	c-4.14,8.99-8.64,17.84-12.35,27.01c-7.15,17.68-14.61,35.29-20.54,53.38c-6.61,20.16-10.04,41.21-11.87,62.3
	c-1.8,20.65-1.62,41.36,1.35,62.09c2.7,18.87,7.06,37.25,13.76,54.95c9.36,24.74,22.99,47.18,40.2,67.32
	c13.4,15.67,28.74,29.26,45.73,40.92c2.9,1.99,3.52,3.9,2.62,7.23c-7.73,28.45-15.3,56.94-22.89,85.43
	c-1.18,4.41-2.17,8.88-3.38,13.88c2.14,0,3.4,0,4.65,0c105.73,0,211.46,0,317.19,0c1.13,0,2.39,0.32,3.35-0.09
	c1.12-0.47,2.56-1.41,2.86-2.43c3.21-11.05,6.35-22.13,9.24-33.26c3.5-13.48,6.7-27.05,10.19-40.54c0.29-1.1,1.63-2.33,2.76-2.75
	c6.43-2.4,13.05-4.29,19.39-6.87c12.73-5.19,25.43-10.49,37.94-16.18c10.34-4.69,20.74-9.41,30.51-15.16
	c17.45-10.26,34.67-20.97,51.56-32.13c11.73-7.74,23.01-16.22,34.02-24.97c10.26-8.16,19.99-17.01,29.77-25.77
	c7.33-6.57,14.67-13.18,21.45-20.31c8.45-8.89,16.5-18.19,24.4-27.58c7.39-8.79,14.86-17.58,21.37-27
	c9.54-13.8,19.2-27.66,27.12-42.4c10.51-19.56,19.85-39.8,28.77-60.15c4.41-10.05,7.37-20.85,9.93-31.57
	c4.14-17.31,9.05-34.68,10.69-52.29C778.89,494.44,778.46,460.15,767.91,426.85z M609.86,306.85c12.31,14.1,22.93,29.43,29.39,47.11
	c3.62,9.9,6.36,20.18,8.67,30.47c1.92,8.57,3.16,17.38,3.78,26.15c1.23,17.43-0.82,34.68-4.13,51.8
	c-5.64,29.14-16.25,56.42-30.29,82.5c-13.95,25.91-30.51,50.04-50.18,71.81c-13.27,14.69-27.67,28.43-42.26,41.84
	c-10.8,9.94-22.71,18.67-34.14,27.92c-0.47,0.38-1.05,0.63-1.58,0.94c-0.37-0.19-0.74-0.38-1.11-0.57
	c35.48-131.15,70.97-262.3,106.76-394.58C600.33,297.59,605.5,301.86,609.86,306.85z M177.34,528.19
	c10.44-37.7,20.62-74.46,31.04-112.11c-5.76,0-10.78,0-16.79,0c0.9-3.94,1.48-7.01,2.31-10c0.95-3.41,2.54-6.69,3.1-10.15
	c0.78-4.84,2.43-7.04,8.01-6.78c12.05,0.55,11.84,0.12,14.56-12.2c2.13-9.66,4.4-19.56,11.3-27.08c3.33-3.62,7.79-7.31,12.37-8.45
	c10.07-2.5,20.49-4.2,30.85-4.74c14.78-0.77,29.63-0.21,44.46-0.19c0.93,0,1.87,0.23,3.53,0.45c-2.17,7.96-4.17,15.65-6.49,23.24
	c-0.29,0.95-2.3,1.87-3.57,1.95c-4.81,0.3-9.65,0.16-14.47,0.36c-6.94,0.3-11.46,3.64-12.86,10.68c-1,5.01-2,10.02-3.19,15.97
	c8.66,0,17.17,0,26.66,0c-2.61,9.38-4.81,17.67-7.36,25.85c-0.29,0.92-2.57,1.68-3.95,1.72c-6.76,0.18-13.54,0.24-20.3,0.03
	c-3.09-0.1-3.98,1.21-4.75,3.99c-4.76,17.27-9.8,34.46-14.69,51.7c-2.49,8.78-4.84,17.61-7.3,26.4c-2.5,8.93-4.99,17.86-7.68,26.73
	c-0.32,1.07-1.85,2.52-2.83,2.52C219.04,528.22,198.77,528.19,177.34,528.19z M171.54,765.39c2.35-8.33,4.77-16.64,6.99-25
	c2.44-9.14,4.61-18.36,7.05-27.5c4.75-17.82,9.66-35.59,14.4-53.41c2.51-9.43,4.67-18.96,7.22-28.38c2.46-9.1,5.3-18.1,7.78-27.2
	c1.68-6.18,3.01-12.45,4.6-19.06c20.63,3.79,40.74,3.13,60.49-0.95c19.35-4,37.33-11.76,53.81-23.1
	c13.21-9.08,24.58-19.97,34.46-32.35c10.34-12.95,18.02-27.43,23.54-43.23c6.57-18.82,9.28-38.12,8.31-57.8
	c-0.53-10.63-2.4-21.41-5.28-31.66c-3.19-11.35-7.39-22.59-12.64-33.14c-12.21-24.53-31.2-43.22-54.09-57.82
	c-7.89-5.03-16.8-8.51-25.4-12.33c-2.73-1.21-3.78-2.23-2.95-5.3c4.87-17.95,9.62-35.93,14.32-53.93
	c2.99-11.43,5.83-22.9,8.97-35.26c-40.81,0-81.11,0-122.6,0c1.91-5.72,3.54-10.33,4.97-15c1.49-4.89,2.77-9.84,4.15-14.76
	c3.77-13.43,7.67-26.83,11.22-40.31c0.94-3.57,2.79-4.22,6.1-4.49c20.8-1.73,41.76-2.61,62.31-5.99
	c16.95-2.79,33.43-8.53,50.06-13.19c14.82-4.15,28.07-11.75,40.71-20.23c16.68-11.2,30.47-25.24,39.78-43.34
	c0.59-1.15,2.29-2.09,3.63-2.39c1.84-0.41,3.84-0.13,5.78-0.13c64.94,0,129.88-0.01,194.83-0.01c1.59,0,3.17,0,5.25,0
	c0,1.64,0.26,2.91-0.04,4.04c-2.74,10.22-5.61,20.4-8.36,30.61c-2.5,9.28-4.9,18.59-7.35,27.88c-4.33,16.42-8.63,32.85-13.02,49.25
	c-5.22,19.49-10.49,38.97-15.79,58.44c-3.91,14.38-7.8,28.77-11.94,43.08c-1.54,5.34-4.21,10.36-5.57,15.73
	c-3.65,14.38-6.64,28.93-10.32,43.3c-4.84,18.89-10.1,37.68-15.18,56.51c-2.91,10.8-5.74,21.62-8.76,32.39
	c-4.79,17.08-9.81,34.09-14.52,51.2c-2.68,9.73-4.77,19.62-7.42,29.35c-3.62,13.28-7.61,26.46-11.26,39.73
	c-4.17,15.14-8.11,30.34-12.19,45.51c-5.32,19.82-10.63,39.63-16.01,59.43c-5.89,21.67-11.84,43.32-17.79,64.98
	c-2.04,7.42-3.86,14.93-6.36,22.19c-0.88,2.56-3.07,5.4-5.43,6.61c-16.72,8.55-33.41,17.23-50.57,24.8
	c-12.27,5.41-25.12,9.64-37.97,13.56c-15.15,4.62-30.46,8.87-45.92,12.32c-27.92,6.23-56.36,8.39-84.86,7
	c-16.14-0.79-32.15-4.05-48.24-6.04C171.13,769.58,170.8,768.02,171.54,765.39z M383.38,949.88c-0.16,0.62-0.53,1.18-0.72,1.79
	c-2.3,7.27-2.3,7.27-10.06,7.27c-81.39,0.04-162.79,0.08-244.18,0.11c-0.48,0-0.97,0-1.45,0c-7.4-0.07-7.64-0.69-5.52-7.82
	c3.01-10.15,5.65-20.42,8.4-30.65c1.08-4.02,1.97-8.09,3.06-12.1c1.46-5.38,2.2-5.67,7.34-3.49c8.4,3.57,16.63,7.68,25.28,10.52
	c12.63,4.15,25.47,7.78,38.39,10.93c29.39,7.17,59.39,9.35,89.49,8.45c17.62-0.53,35.24-2.72,52.75-5.01
	c14.15-1.85,28.13-4.97,42.19-7.52c0.58-0.1,1.18-0.06,2.35-0.12C388.18,931.74,385.79,940.81,383.38,949.88z"
        
			fill="#fff"/>
        
        <motion.path 
            variants={text}
            transition={{ease: "easeOut", duration: 3}}
           d="M900.7 491.5V13.47h324.52v96.95h-214.11v103.01h176.4v89.55h-176.4V491.5H900.7zM1420.47 498.23c-30.08 0-56.89-4.94-80.46-14.81-23.56-9.87-43.43-23.23-59.59-40.06-16.16-16.83-28.39-36.36-36.69-58.58-8.31-22.22-12.46-45.45-12.46-69.69s4.15-47.47 12.46-69.69c8.3-22.22 20.54-41.74 36.69-58.58 16.16-16.83 36.02-30.3 59.59-40.4 23.57-10.1 50.38-15.15 80.46-15.15 30.07 0 56.78 5.05 80.12 15.15 23.33 10.1 43.09 23.56 59.25 40.4s28.5 36.36 37.03 58.58c8.52 22.22 12.79 45.45 12.79 69.69s-4.16 47.47-12.46 69.69c-8.31 22.22-20.54 41.74-36.69 58.58-16.16 16.83-36.02 30.19-59.59 40.06-23.55 9.87-50.38 14.81-80.45 14.81zM1341.7 315.1c0 27.84 7.41 50.16 22.22 66.99 14.81 16.83 33.67 25.25 56.56 25.25 11.21 0 21.54-2.24 30.97-6.73 9.43-4.48 17.61-10.77 24.58-18.85 6.95-8.08 12.46-17.84 16.5-29.29 4.04-11.45 6.06-23.9 6.06-37.37 0-27.83-7.41-50.16-22.22-66.99s-33.44-25.25-55.88-25.25c-11.23 0-21.66 2.25-31.31 6.73-9.66 4.49-17.96 10.77-24.91 18.85-6.96 8.08-12.46 17.84-16.5 29.29-4.05 11.45-6.07 23.9-6.07 37.37zM1887.05 230.26c-26.04.45-49.6 4.71-70.7 12.79-21.1 8.08-36.36 20.2-45.78 36.36V491.5h-107.73V138.02h98.97v71.37c12.12-23.79 27.71-42.42 46.79-55.88 19.07-13.47 39.39-20.42 60.93-20.87h10.77c2.24 0 4.48.23 6.73.67v96.95zM2490.98 491.5h-107.73V292.88c0-23.33-4.27-40.28-12.79-50.83-8.53-10.54-19.53-15.82-32.99-15.82-7.19 0-14.48 1.58-21.88 4.71-7.41 3.15-14.25 7.52-20.54 13.13-6.29 5.62-12.01 12.23-17.17 19.86-5.17 7.64-9.32 15.94-12.46 24.91V491.5h-107.73V292.88c0-23.33-4.27-40.28-12.79-50.83-8.53-10.54-19.53-15.82-32.99-15.82-14.37 0-28.39 5.72-42.08 17.17-13.7 11.45-23.68 26.59-29.96 45.45V491.5h-107.73V138.02h96.95v59.25c13.01-21.55 30.63-37.92 52.85-49.15 22.22-11.21 48.14-16.83 77.76-16.83 14.81 0 27.71 1.8 38.71 5.39 10.99 3.6 20.54 8.53 28.61 14.81 8.08 6.29 14.58 13.58 19.53 21.88a95.122 95.122 0 0110.77 26.59c13.46-21.99 31.19-38.93 53.19-50.83 21.99-11.89 47.13-17.84 75.41-17.84 22.44 0 40.5 4.16 54.2 12.46 13.69 8.31 24.34 19.08 31.98 32.32 7.63 13.24 12.68 27.72 15.15 43.43 2.46 15.72 3.7 30.97 3.7 45.78V491.5zM2668.73 498.23c-36.36 0-63.86-11.33-82.48-34-18.63-22.66-27.94-55.99-27.94-99.98V138.02h107.73v202.66c0 21.54 4.26 38.04 12.79 49.49 8.52 11.45 20.64 17.17 36.36 17.17 14.36 0 28.28-3.81 41.74-11.45 13.47-7.63 25.35-20.87 35.68-39.72V138.02h107.73V370.3c0 10.77 1.68 18.29 5.05 22.56s9.31 6.85 17.84 7.74v90.89c-10.33 2.24-19.08 3.7-26.26 4.38-7.18.67-13.7 1.01-19.53 1.01-38.61 0-60.6-15.03-65.98-45.11l-2.02-21.54c-16.16 23.34-36.25 40.51-60.26 51.51-24.01 10.99-50.82 16.49-80.45 16.49zM2982.48 0h107.73v365.59c0 26.93 11.45 40.4 34.34 40.4 5.39 0 11.33-.78 17.84-2.36 6.5-1.57 12.46-3.92 17.84-7.07l14.14 80.79c-13.46 6.29-28.95 11.23-46.46 14.81-17.51 3.59-33.9 5.39-49.15 5.39-30.97 0-54.77-8.08-71.37-24.24-16.61-16.16-24.91-39.49-24.91-70.02V0zM3309.69 498.23c-17.51 0-33.78-2.81-48.81-8.42-15.04-5.61-27.94-13.47-38.71-23.56-10.77-10.1-19.3-21.99-25.58-35.68-6.29-13.69-9.43-28.61-9.43-44.77 0-17.51 3.7-33.43 11.11-47.8 7.41-14.36 17.84-26.7 31.31-37.03 13.47-10.32 29.39-18.4 47.8-24.24 18.4-5.83 38.82-8.75 61.27-8.75 14.81 0 29.17 1.24 43.09 3.7 13.91 2.47 26.03 6.18 36.36 11.11v-16.16c0-40.84-23.57-61.27-70.7-61.27-19.3 0-37.7 3.26-55.21 9.76-17.5 6.51-35.92 16.27-55.21 29.29l-31.64-67.33c23.33-15.25 47.57-26.7 72.71-34.34 25.13-7.63 51.84-11.45 80.12-11.45 53.41 0 94.7 12.57 123.88 37.7 29.17 25.14 43.76 61.94 43.76 110.42v90.89c0 10.77 1.68 18.29 5.05 22.56s9.31 6.85 17.84 7.74v90.89c-9.43 2.24-17.96 3.7-25.58 4.38-7.64.67-14.59 1.01-20.87 1.01-20.2 0-35.46-3.93-45.78-11.78-10.33-7.85-16.83-18.96-19.53-33.33l-2.02-16.16c-15.72 20.2-34.45 35.68-56.22 46.46-21.77 10.78-44.77 16.16-69.01 16.16zm31.65-77.43c11.67 0 23-2.02 34-6.06 10.99-4.04 20.08-9.43 27.27-16.16 10.32-8.08 15.49-16.6 15.49-25.58v-33.66c-9.43-3.59-19.64-6.4-30.63-8.42-11-2.02-21.21-3.03-30.63-3.03-19.76 0-36.02 4.49-48.81 13.47s-19.19 20.65-19.19 35.01c0 13.02 4.93 23.68 14.81 31.98 9.85 8.31 22.42 12.45 37.69 12.45zM3978.93 495.54c-35.46 0-67.78-6.95-96.95-20.87-29.18-13.91-54.09-32.2-74.74-54.87-20.65-22.66-36.69-48.58-48.14-77.76-11.45-29.17-17.17-59.25-17.17-90.22 0-31.41 5.94-61.71 17.84-90.89 11.89-29.17 28.5-54.87 49.82-77.09 21.31-22.22 46.56-39.94 75.75-53.19 29.17-13.23 61.04-19.86 95.61-19.86 35.45 0 67.77 6.96 96.95 20.87 29.17 13.92 54.08 32.32 74.74 55.21 20.64 22.89 36.58 48.93 47.8 78.1 11.21 29.18 16.83 58.81 16.83 88.87 0 31.42-5.95 61.72-17.84 90.89-11.9 29.18-28.39 54.87-49.49 77.09-21.1 22.22-46.24 40.06-75.41 53.53-29.18 13.46-61.04 20.19-95.6 20.19zm-124.56-242.38c0 18.41 2.69 36.25 8.08 53.53 5.39 17.28 13.35 32.65 23.9 46.12 10.54 13.47 23.67 24.24 39.39 32.32 15.71 8.08 33.66 12.12 53.86 12.12 21.09 0 39.49-4.26 55.21-12.79 15.71-8.52 28.72-19.63 39.05-33.33 10.32-13.69 18.06-29.17 23.23-46.46 5.16-17.27 7.74-34.9 7.74-52.85 0-18.4-2.69-36.24-8.08-53.53-5.39-17.27-13.47-32.54-24.24-45.78-10.77-13.23-23.9-23.79-39.39-31.64-15.49-7.85-33.33-11.78-53.53-11.78-21.1 0-39.39 4.16-54.87 12.46-15.49 8.31-28.51 19.19-39.05 32.65-10.55 13.47-18.41 28.85-23.57 46.12-5.15 17.27-7.73 34.89-7.73 52.84zM4613.16 491.5h-107.73V292.88c0-23.33-4.38-40.28-13.13-50.83-8.75-10.54-20.31-15.82-34.67-15.82-7.64 0-15.26 1.58-22.89 4.71-7.64 3.15-15.04 7.52-22.22 13.13-7.19 5.62-13.58 12.23-19.19 19.86a94.45 94.45 0 00-13.13 24.91V491.5h-107.73V138.02h96.95v59.25c13.01-21.09 31.41-37.37 55.21-48.81 23.79-11.45 51.17-17.17 82.14-17.17 22.89 0 41.29 4.16 55.21 12.46 13.91 8.31 24.68 19.08 32.32 32.32 7.63 13.24 12.68 27.72 15.15 43.43 2.46 15.72 3.7 30.97 3.7 45.78V491.5zM4853.52 498.23c-29.62 0-56.22-4.83-79.78-14.48s-43.54-22.78-59.92-39.39c-16.39-16.6-28.85-35.79-37.37-57.57-8.53-21.77-12.79-44.54-12.79-68.34 0-25.58 4.26-49.71 12.79-72.38 8.52-22.66 20.87-42.52 37.03-59.59 16.16-17.05 36.02-30.52 59.59-40.4 23.56-9.87 50.38-14.81 80.46-14.81 30.07 0 56.78 4.94 80.12 14.81 23.33 9.88 43.09 23.23 59.25 40.06 16.16 16.83 28.38 36.25 36.69 58.24 8.3 22 12.46 45.11 12.46 69.35 0 6.29-.23 12.46-.67 18.52-.45 6.06-1.13 11.34-2.02 15.82h-261.24c1.79 23.8 10.44 41.86 25.92 54.2 15.49 12.35 33.1 18.52 52.85 18.52 15.71 0 30.86-3.81 45.45-11.45 14.58-7.63 24.34-17.95 29.29-30.97l91.57 25.58c-13.92 27.84-35.46 50.5-64.63 68-29.2 17.53-64.21 26.28-105.05 26.28zm74.74-216.8c-2.25-22.44-10.33-40.17-24.24-53.19-13.92-13.01-31.2-19.53-51.84-19.53-21.1 0-38.49 6.63-52.18 19.86-13.7 13.25-21.66 30.87-23.9 52.85h152.16zM1223.5 615.11v375.1h-86.64V836.48H987.35v153.74H900.7v-375.1h86.64V760.4h149.51V615.11h86.65zM1417.39 995.5c-23.25 0-44.11-3.79-62.6-11.36-18.49-7.57-34.17-17.87-47.02-30.91-12.86-13.03-22.63-28.08-29.32-45.17-6.69-17.08-10.04-34.95-10.04-53.62 0-20.08 3.34-39 10.04-56.79 6.69-17.78 16.38-33.37 29.06-46.76 12.68-13.38 28.26-23.95 46.76-31.7 18.49-7.74 39.53-11.62 63.13-11.62 23.59 0 44.55 3.88 62.87 11.62 18.31 7.75 33.81 18.23 46.49 31.43 12.68 13.21 22.27 28.45 28.79 45.7 6.51 17.26 9.77 35.4 9.77 54.42 0 4.94-.18 9.77-.53 14.53-.36 4.75-.88 8.9-1.58 12.42h-204.98c1.4 18.67 8.19 32.85 20.34 42.53 12.15 9.69 25.97 14.53 41.47 14.53 12.32 0 24.21-2.99 35.66-8.98 11.44-5.98 19.1-14.08 22.98-24.3l71.85 20.08c-10.92 21.84-27.83 39.62-50.72 53.36-22.9 13.72-50.37 20.59-82.42 20.59zm58.64-170.12c-1.77-17.61-8.11-31.52-19.02-41.74-10.92-10.21-24.48-15.32-40.68-15.32-16.56 0-30.2 5.2-40.94 15.59-10.75 10.39-17 24.22-18.76 41.47h119.4zM1682.6 995.5c-13.74 0-26.51-2.2-38.3-6.6-11.8-4.4-21.92-10.57-30.38-18.49-8.45-7.92-15.15-17.25-20.08-28-4.94-10.74-7.4-22.45-7.4-35.13 0-13.74 2.91-26.23 8.72-37.51 5.81-11.27 14-20.95 24.57-29.06 10.57-8.1 23.06-14.44 37.51-19.02 14.44-4.57 30.46-6.87 48.08-6.87 11.62 0 22.89.97 33.81 2.91 10.91 1.94 20.42 4.85 28.53 8.72v-12.68c0-32.04-18.49-48.08-55.47-48.08-15.15 0-29.58 2.56-43.32 7.66-13.74 5.11-28.18 12.77-43.32 22.98l-24.83-52.83c18.31-11.97 37.33-20.95 57.06-26.94 19.72-5.98 40.68-8.98 62.87-8.98 41.91 0 74.31 9.86 97.21 29.59 22.89 19.73 34.34 48.6 34.34 86.64v71.32c0 8.45 1.32 14.36 3.96 17.7 2.64 3.35 7.31 5.37 14 6.08v71.32c-7.4 1.76-14.09 2.91-20.08 3.43-5.99.53-11.45.79-16.38.79-15.85 0-27.83-3.09-35.92-9.25-8.11-6.16-13.21-14.88-15.32-26.15l-1.59-12.68c-12.33 15.85-27.03 28-44.11 36.45-17.1 8.45-35.15 12.68-54.16 12.68zm24.83-60.76c9.16 0 18.05-1.58 26.68-4.75 8.63-3.17 15.76-7.4 21.4-12.68 8.1-6.34 12.15-13.03 12.15-20.08v-26.42c-7.4-2.82-15.41-5.02-24.04-6.6-8.63-1.59-16.64-2.38-24.04-2.38-15.5 0-28.26 3.52-38.3 10.57-10.04 7.05-15.06 16.2-15.06 27.47 0 10.22 3.87 18.58 11.62 25.09 7.74 6.53 17.61 9.78 29.59 9.78zM1912.41 604.55h84.53v286.87c0 21.13 8.98 31.7 26.94 31.7 4.23 0 8.89-.61 14-1.85 5.1-1.23 9.77-3.08 14-5.55l11.09 63.4c-10.57 4.94-22.72 8.81-36.45 11.62-13.74 2.81-26.6 4.23-38.57 4.23-24.3 0-42.97-6.34-56-19.02-13.03-12.68-19.55-30.99-19.55-54.94V604.55zM2270.07 975.42c-11.62 4.94-24.92 9.51-39.89 13.74-14.97 4.23-30.03 6.34-45.17 6.34-10.57 0-20.52-1.32-29.85-3.96-9.34-2.64-17.53-6.87-24.57-12.68-7.05-5.81-12.6-13.47-16.64-22.98-4.05-9.51-6.08-20.95-6.08-34.34V776.78h-35.4v-63.93h35.4v-88.23h84.53v88.23h56.53v63.93h-56.53v115.7c0 9.16 2.29 15.77 6.87 19.81 4.57 4.05 10.38 6.08 17.43 6.08 6.34 0 12.85-1.06 19.55-3.17 6.69-2.11 12.5-4.4 17.43-6.87l16.39 67.09zM2570.14 990.21h-84.53V834.36c0-17.96-3.52-31.17-10.57-39.62-7.05-8.45-16.73-12.68-29.06-12.68-4.94 0-10.3 1.15-16.11 3.43-5.81 2.3-11.45 5.64-16.91 10.04-5.47 4.41-10.48 9.6-15.06 15.58-4.58 5.99-8.11 12.68-10.57 20.08v159.02h-84.53V604.55h84.53v154.79c10.21-16.55 23.68-29.32 40.41-38.3 16.72-8.98 35.13-13.47 55.21-13.47 18.66 0 33.72 3.26 45.17 9.77 11.44 6.52 20.25 14.79 26.42 24.83 6.16 10.04 10.3 21.31 12.41 33.81 2.11 12.51 3.17 24.75 3.17 36.72v177.51zM2995.95 990.21l-24.83-26.42c-15.5 10.57-31.88 18.49-49.13 23.77-17.26 5.28-34.87 7.92-52.83 7.92-20.43 0-38.66-3.26-54.68-9.77-16.03-6.51-29.5-15.14-40.42-25.89-10.92-10.74-19.28-22.98-25.09-36.72-5.81-13.74-8.72-28-8.72-42.79 0-11.27 1.59-21.74 4.75-31.43 3.17-9.68 7.48-18.57 12.94-26.68 5.46-8.1 11.71-15.67 18.75-22.72 7.04-7.04 14.44-13.55 22.19-19.55-12.68-15.49-21.66-28.79-26.94-39.89-5.28-11.09-7.92-23.33-7.92-36.72 0-14.44 2.64-27.38 7.92-38.83 5.28-11.44 12.68-21.21 22.19-29.32 9.51-8.1 20.69-14.26 33.55-18.49 12.85-4.23 26.85-6.34 42-6.34 13.38 0 26.42 1.68 39.09 5.02 12.68 3.35 23.86 8.63 33.55 15.85 9.68 7.22 17.52 16.2 23.51 26.94 5.98 10.75 8.98 23.51 8.98 38.3 0 20.08-5.28 37.77-15.85 53.1-10.57 15.32-24.3 29.32-41.21 42l58.64 62.34c4.57-10.57 8.19-22.1 10.83-34.6 2.64-12.5 3.96-26.15 3.96-40.94h68.15c-.36 26.07-3.43 49.58-9.25 70.53-5.81 20.96-13.83 39.89-24.04 56.79l80.83 84.53h-110.92zm-117.81-60.75c16.55 0 32.23-4.76 47.02-14.26l-74.49-79.25c-9.16 7.05-16.38 14.18-21.66 21.4-5.28 7.22-7.92 15.06-7.92 23.51 0 5.64 1.23 11.36 3.7 17.17 2.46 5.81 6.16 11.01 11.09 15.59s10.91 8.37 17.96 11.36c7.04 2.98 15.14 4.48 24.3 4.48zm-37.51-229.29c0 5.64 1.76 10.83 5.28 15.59 3.52 4.75 9.86 11.71 19.02 20.87 10.91-7.04 19.02-13.38 24.3-19.02 5.28-5.63 7.92-12.32 7.92-20.08 0-7.74-2.56-13.91-7.66-18.49-5.11-4.57-11.71-6.87-19.81-6.87-8.81 0-15.85 2.64-21.13 7.92-5.28 5.29-7.92 11.98-7.92 20.08zM3264.32 990.21v-375.1h254.64v76.08h-168v80.83h138.42v70.26h-138.42v147.93h-86.64zM3558.05 681.15v-76.6h84.53v76.6h-84.53zm0 309.06V712.85h84.53v277.36h-84.53zM3880.31 975.42c-11.62 4.94-24.92 9.51-39.89 13.74-14.97 4.23-30.03 6.34-45.17 6.34-10.57 0-20.52-1.32-29.85-3.96-9.34-2.64-17.53-6.87-24.57-12.68-7.05-5.81-12.6-13.47-16.64-22.98-4.05-9.51-6.08-20.95-6.08-34.34V776.78h-35.4v-63.93h35.4v-88.23h84.53v88.23h56.53v63.93h-56.53v115.7c0 9.16 2.29 15.77 6.87 19.81 4.57 4.05 10.38 6.08 17.43 6.08 6.34 0 12.85-1.06 19.55-3.17 6.69-2.11 12.5-4.4 17.43-6.87l16.39 67.09zM4180.39 990.21h-84.53V834.36c0-18.31-3.43-31.61-10.3-39.89-6.87-8.27-15.94-12.42-27.21-12.42-5.99 0-11.98 1.24-17.96 3.7-5.99 2.47-11.8 5.9-17.43 10.3-5.64 4.41-10.66 9.6-15.06 15.59a73.91 73.91 0 00-10.3 19.55v159.02h-84.53V712.85h76.08v46.49c10.21-16.55 24.65-29.32 43.32-38.3 18.66-8.98 40.15-13.47 64.45-13.47 17.96 0 32.4 3.26 43.32 9.77 10.91 6.52 19.36 14.97 25.36 25.36 5.98 10.39 9.95 21.75 11.89 34.08 1.93 12.33 2.91 24.3 2.91 35.92v177.51zM4368.99 995.5c-23.25 0-44.11-3.79-62.6-11.36-18.49-7.57-34.17-17.87-47.02-30.91-12.86-13.03-22.63-28.08-29.32-45.17-6.69-17.08-10.04-34.95-10.04-53.62 0-20.08 3.34-39 10.04-56.79 6.69-17.78 16.38-33.37 29.06-46.76 12.68-13.38 28.26-23.95 46.75-31.7 18.49-7.74 39.53-11.62 63.13-11.62 23.59 0 44.55 3.88 62.87 11.62 18.31 7.75 33.81 18.23 46.49 31.43 12.68 13.21 22.27 28.45 28.79 45.7 6.51 17.26 9.77 35.4 9.77 54.42 0 4.94-.18 9.77-.53 14.53-.35 4.75-.88 8.9-1.58 12.42h-204.98c1.4 18.67 8.19 32.85 20.34 42.53 12.15 9.69 25.97 14.53 41.47 14.53 12.32 0 24.21-2.99 35.66-8.98 11.44-5.98 19.1-14.08 22.98-24.3l71.85 20.08c-10.92 21.84-27.83 39.62-50.72 53.36-22.89 13.72-50.36 20.59-82.41 20.59zm58.64-170.12c-1.77-17.61-8.11-31.52-19.02-41.74-10.92-10.21-24.48-15.32-40.68-15.32-16.56 0-30.2 5.2-40.94 15.59-10.75 10.39-17 24.22-18.76 41.47h119.4zM4664.84 995.5c-23.6 0-46.85-3.79-69.74-11.36-22.9-7.57-42.26-18.57-58.11-33.02l30.11-51.77c16.91 11.62 33.37 20.6 49.4 26.94 16.02 6.34 31.43 9.51 46.23 9.51 10.91 0 19.37-1.93 25.36-5.81 5.98-3.87 8.98-9.51 8.98-16.91s-3.79-13.29-11.36-17.7c-7.58-4.4-20.87-9.06-39.89-14-18.67-5.28-34.43-10.38-47.28-15.32-12.86-4.93-23.34-10.38-31.43-16.38-8.11-5.98-13.92-12.85-17.43-20.6-3.53-7.74-5.28-16.91-5.28-27.47 0-14.08 2.81-26.94 8.45-38.57 5.63-11.62 13.38-21.48 23.25-29.59 9.86-8.1 21.57-14.44 35.13-19.02 13.55-4.57 28.26-6.87 44.11-6.87 20.78 0 40.23 2.82 58.38 8.45 18.14 5.64 35.66 15.85 52.57 30.64l-32.75 50.72c-15.85-10.91-29.94-18.84-42.27-23.77-12.33-4.93-24.3-7.4-35.92-7.4-9.16 0-16.91 1.85-23.25 5.55-6.34 3.7-9.51 9.6-9.51 17.7 0 7.75 3.43 13.56 10.3 17.43 6.87 3.88 19.63 8.11 38.3 12.68 19.72 5.28 36.36 10.57 49.92 15.85 13.55 5.28 24.57 11.19 33.02 17.7 8.45 6.52 14.61 14 18.49 22.45 3.87 8.45 5.81 18.49 5.81 30.11 0 27.47-10.22 49.31-30.64 65.51-20.44 16.22-48.09 24.32-82.95 24.32zM4928.46 995.5c-23.6 0-46.85-3.79-69.74-11.36-22.9-7.57-42.26-18.57-58.11-33.02l30.11-51.77c16.91 11.62 33.37 20.6 49.4 26.94 16.02 6.34 31.43 9.51 46.23 9.51 10.91 0 19.36-1.93 25.36-5.81 5.98-3.87 8.98-9.51 8.98-16.91s-3.79-13.29-11.36-17.7c-7.58-4.4-20.87-9.06-39.89-14-18.67-5.28-34.43-10.38-47.28-15.32-12.86-4.93-23.34-10.38-31.43-16.38-8.11-5.98-13.92-12.85-17.43-20.6-3.53-7.74-5.28-16.91-5.28-27.47 0-14.08 2.81-26.94 8.45-38.57 5.63-11.62 13.38-21.48 23.25-29.59 9.86-8.1 21.57-14.44 35.13-19.02 13.55-4.57 28.27-6.87 44.11-6.87 20.78 0 40.23 2.82 58.38 8.45 18.14 5.64 35.66 15.85 52.57 30.64l-32.75 50.72c-15.85-10.91-29.94-18.84-42.26-23.77-12.33-4.93-24.3-7.4-35.92-7.4-9.16 0-16.91 1.85-23.25 5.55-6.34 3.7-9.51 9.6-9.51 17.7 0 7.75 3.43 13.56 10.3 17.43 6.87 3.88 19.63 8.11 38.3 12.68 19.72 5.28 36.36 10.57 49.92 15.85 13.55 5.28 24.57 11.19 33.02 17.7 8.45 6.52 14.61 14 18.49 22.45 3.87 8.45 5.81 18.49 5.81 30.11 0 27.47-10.22 49.31-30.64 65.51-20.45 16.22-48.09 24.32-82.96 24.32z" fill="#fff"/>
        
     </motion.svg>)

export default Logo