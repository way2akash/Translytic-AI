/* global chrome */


import { NoSummaryBox, SummarySectionCont, SummaryTextCont } from "../../Style/AppContentStyle";
import { useContentSharing } from "../../Context/ContentSharingProvider";



const SummarySection=()=>{
    const {sumarryData}= useContentSharing()
    let pointIcon= chrome.runtime.getURL('./images/point.svg')
    let loader= chrome.runtime.getURL('./images/loader.gif')

  
    return(
        <SummarySectionCont>

            {
                sumarryData && sumarryData.length > 0 ?

                sumarryData.map((item, index)=>(
                    <SummaryTextCont key={index}><img src={pointIcon}/>{item}</SummaryTextCont>
                ))

                : 
                <NoSummaryBox>
                   <div id="t1">No Summary Found</div> 
                   <div id="t2">Please wait it takes time to generate summary</div>
                   <img src={loader}/>
                </NoSummaryBox>
            }
      
        </SummarySectionCont>
    )
}

export default SummarySection;