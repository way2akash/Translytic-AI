import { TranscriptText, Transtime, TransWrap } from "../../Style/AppContentStyle"
import { FormatTime } from "../../utils/FormatTime"


const TranscriptBox=(props)=>{

    return(
        <TransWrap key={props.key} onClick={()=>{
                let vid=document.querySelector("video")
                if(vid){
                    vid.currentTime=props?.data?.start
                }
        }}>
            <Transtime>
                {
                    FormatTime(props?.data?.start)
                }
            </Transtime>
            <TranscriptText>
            {props?.data?.text}
            </TranscriptText>

        </TransWrap>
    )
}
export default TranscriptBox