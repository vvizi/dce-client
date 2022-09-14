import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import useStore from "../store/useStore";
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

    const handleOpenDialog = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="delete-container">
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>삭제 추천 메일 계정</DialogTitle>
                <Divider />
                <DialogContent>
                    <div>
                        <p>AI를 통한 데이터분석을 기반으로 디지털 탄소 배출 절감에 도움을 줄 수 있는 메일들을 삭제 하시는 것을 추천드립니다. 설명더!</p>
                        {deleteData.map((d:deleteData) => <p>{d.address}</p>)}
                    </div>
                </DialogContent>
            </Dialog>
            <button className="dialog-button" onClick={handleOpenDialog}>삭제 추천 메일 보기</button>
        </div>
    )
}

export default observer(DeleteDialogComponent);