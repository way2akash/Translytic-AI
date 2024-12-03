import styled, { keyframes } from "styled-components";

export const YtMainContainer = styled.div`
  width: 100%;
  background-color: red;
`;

export const YtinnerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const YtTitle = styled.div`
  height: 35px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: white;
  /* background-color: #0e093a;  */
  text-transform: uppercase;
  position: relative;
  /* Apply the animation */
  background: linear-gradient(to bottom, #b50bae, #7821fcfc);
  img {
    height: 90%;
    margin-right: 9px;
  }
  #dropDown{
    position: absolute;
    right: 10px;
    height: 13px;
  }
`;

export const YtContentBody = styled.div`
  /* height: 553px; */
  height: 516px;
  width: 100%;
`;

export const YtHeader = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const YtTransWrap = styled.div`
  position: relative;
`;

export const YtSummaryWrap = styled.div`
  position: relative;
`;

export const YtTranscriptSection = styled.div`
  height: 480px;
  width: 100%;
  background-color: #fff;
  overflow-y: auto;
  padding: 5px 10px 40px 10px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a0a0a0;
  }

  scrollbar-width: thin;
  scrollbar-color: #c0c0c0 #f0f0f0;
`;
export const YtSummarySection = styled.div`
  height: 480px;
  width: 100%;
  background-color: #fff;
  overflow-y: auto;
  padding: 5px 10px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a0a0a0;
  }

  scrollbar-width: thin;
  scrollbar-color: #c0c0c0 #f0f0f0;
`;

export const TransWrap = styled.div`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  font-size: 14px;
  cursor: pointer;
`;

export const Transtime = styled.div`
  width: 10%;
  color: #290268;
  font-weight: 600;
`;

export const TranscriptText = styled.div`
  width: 90%;
  color: #3c453c;
`;

export const TrnscSelectionMenu = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  background-color: #aa0fbc;
  color: #fff;
  padding: ${(props) => (props.val ? "" : "5px 10px")};
  font-weight: 600;
  cursor: pointer;
`;

export const Transbox = styled.div`
  background: "#fff";
  z-index: 10;
  border: 1px solid #ddd;
  border-radius: "5px";
  padding: "5px";
  max-height: "200px";
  overflow-y: "auto";
color: #fff;
`;

export const TransOption = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  font-size: "10px";
  font-weight: 600;

`;

export const HeaderSelection = styled.div`
  width: 50%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #fff;
`;

export const SummarySectionCont = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 5px 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f0f0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #c0c0c0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #a0a0a0;
  }

  scrollbar-width: thin;
  scrollbar-color: #c0c0c0 #f0f0f0;
`;

export const SummaryTextCont = styled.div`
  width: 100%;
  font-size: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  color: #3c453c;

  img {
    height: 15px;
  }
`;

export const NoSummaryBox= styled.div`
display: flex;
flex-direction: column;
align-items: center;
#t1{
    font-size: 14px;
    font-weight: 600;
    color: #290268;
    padding: 10px 0px;
}

#t2{
    font-weight: 400;
    font-size: 12px;
    color: #ff0101;
}
img{
    height: 65px;
}


`

export const FooterSection= styled.div`
width: 100%;
height: 30px;
box-sizing: border-box;
background-color: #0e093a;
position: absolute;
bottom: 0;
display: flex;
justify-content: flex-start;
padding: 5px 10px;
gap: 10px;
div{
    display: flex;
    gap: 2px;
    color: #fff;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
}
div img{
    height: 90%;
}
input{
    cursor: pointer;
}
`