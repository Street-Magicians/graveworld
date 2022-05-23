// import React, { useState } from "react";
// import styled from "styled-components";
// import Login from "../../pages/Login";
// // import { SignupForm } from "./signup";
// import { useUser } from "./accountContext";
// import LoginForm from "./login.js";

// const BoxContainer = styled.div`
//   width: 280px;
//   min-height: 550px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   border-radius: 19px;
//   background-color: #fff;
//   box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
//   position: relative;
//   overflow: hidden;
// `;
// const TopContainer = styled.div`
//   width: 100%;
//   height: 250px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   padding: 0 1.8em;
//   padding-bottom: 5em;
// `;

// const BackDrop = styled.div`
//   width: 160%;
//   height: 550px;
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   border-radius: 50%;
//   transform: rotate(60deg);
//   top: -290px;
//   left: -70px;
//   background: rgb(94, 210, 170);
//   background: linear-gradient(58deg, rgba(94, 210, 170, 1) 13%, rgba(48, 140, 108, 1) 46%, rgba(103, 174, 145, 1) 70%, rgba(132, 205, 180, 1) 100%);
// `;
// const HeaderContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
// `;

// const HeaderText = styled.h2`
//   font-size: 35px;
//   font-weight: 650;
//   line-height: 4;
//   color: #fff;
//   z-index: 10;
//   margin: 0;
// `;

// const SmallText = styled.h5`
//   color: black;
//   font-weight: 500;
//   font-size: 11px;
//   z-index: 10;
//   margin: 0;
//   margin-top: 7px;
// `;

// const InnerContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   padding: 0 1.8em;
// `;

// const AccountContainer = styled.div`
//   display: flex;
//   justify-content: center;
// `;

// export function AccountBox(props) {
//   // const [isExpanded, setExpanded] = useState(false);
//   const { userInformation, changeName } = useUser();
//   console.log(userInformation);
//   React.useEffect(() => {
//     changeName("brandon");
//   }, []);
//   const [active, setActive] = useState("login");
//   const switchToSignup = () => {
//     setTimeout(() => {
//       setActive("signup");
//     }, 400);
//   };

//   const switchToLogin = (Login) => {
//     setTimeout(() => {
//       setActive("signin");
//     }, 400);
//   };

//   return (
//     <AccountContainer>
//       <BoxContainer>
//         <TopContainer>
//           {userInformation.name}
//           <BackDrop />{" "}
//           <HeaderContainer>
//             <HeaderText>Welcome</HeaderText>
//             <HeaderText>Back</HeaderText>
//             <SmallText>Please Sign In</SmallText>
//           </HeaderContainer>
//         </TopContainer>
//         <InnerContainer>
//           <LoginForm />
//         </InnerContainer>
//       </BoxContainer>
//     </AccountContainer>
//   );
// }

// export default AccountBox;
