import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from "../store/useStore";
import { ReactComponent as DeleteIcon } from '../assets/mail.svg';
import { deleteData } from '../store/AppStore';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import '../style/DeleteDialog.css';


const DeleteDialogComponent = (): JSX.Element => {
    const [open, setOpen] = useState<boolean>(false);
    const { appStore } = useStore();
    const deleteData = appStore.deleteDataList;
    const email = appStore.getUserEmail();
    const handleOpenDialog = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="delete-container">
            <Dialog onClose={handleClose} open={open}>
                <div className='delete-title'>
                    <p>삭제 추천 메일 계정</p>
                    <button type='button' className="dialog-button--close" onClick={handleClose}>
                        X
                    </button>
                </div>
                <Divider />
                <DialogContent>
                    <div>
                        <p className='delete-data-text'>AI를 통한 데이터분석을 기반으로 디지털 탄소 배출 절감에 도움을 줄 수 있는 메일들을 삭제 하시는 것을 추천드립니다.</p>
                        {deleteData.map((d:deleteData) => <p className='delete-data'>{d.address}</p>)}
                    </div>
                </DialogContent>
            </Dialog>
            <div className="delete-img">
                <DeleteIcon />
            </div>
            <div className='delete-description'>
                <p><span>{email}</span>님 아래와 같은 메일은 지우세요</p>
                <p>디지털 탄소 배출 절감에 도움이 됩니다.</p>
            </div>
            <div> 
                <button type='button' className="dialog-button" onClick={handleOpenDialog}>
                삭제 추천 메일 보기
            </button>
            </div>
        </div>
    )
}

export default observer(DeleteDialogComponent);