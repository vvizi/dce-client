import React from 'react';
import { styled } from '@mui/material/styles';
import ReportIcon from '@mui/icons-material/ErrorOutline';
import IconButton from '@mui/material/IconButton';
import Tooltip, { TooltipProps, tooltipClasses} from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import '../'

const CautionTooltipComponent = (): JSX.Element => {
    const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
      ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
          backgroundColor: 'rgba(245, 245, 249, 0.9)',
          color: 'rgba(0, 0, 0, 0.87)',
          maxWidth: 650,
          fontSize: theme.typography.pxToRem(12),
          border: '1px solid #dadde9',
        },
      }));

    return(
        <>
            <LightTooltip
                title={
                    <React.Fragment>
                        <Typography color="inherit">How to use</Typography>
                        <p>DCE : 메일 한개당 발생하는 탄소의 양은 4g이라고 합니다. 우리 모두 지구를 위한 메일 지우기를 시작으로 작은 실천을 합시다. </p>
                        <p>IMAP 설정 : 우리의 서비스를 사용하려면 메일에서 IMAP/SMTP 설정을 사용함으로 설정해주셔야 합니다.</p>
                        <br/>
                        <p>네이버:<br/>메일 왼쪽 아래의 환경설정 &gt; POP3 / IMAP 설정 &gt; IMAP / SMTP 설정 탭에서 IMAP/SMTP 사용 옵션을 사용함으로 설정</p>
                        <br/>
                        <p>Gmail:<br/>오른쪽 상단에서 설정 설정 다음 모든 설정 보기 클릭 &gt; 전달 및 POP/IMAP 탭 클릭 &gt; 'IMAP 액세스' 섹션에서 IMAP 사용 선택 &gt; 변경사항 저장 클릭</p>
                        <br/>
                        <p>다음:<br/>메일 왼쪽 아래의 환경설정 &gt; IMAP/POP3 설정에서 사용 여부 설정</p>
                    </React.Fragment>
                }>
                <IconButton>
                    <ReportIcon />
                </IconButton>
            </LightTooltip>
        </>
    );
};

export default CautionTooltipComponent;