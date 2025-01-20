import { Modal } from "reactstrap";
import { useEffect, useState } from "react";

interface InternalserverModelProps {
    showModal: boolean,
    toggle: Function,
    description: string,
    imgPath: string
}

const InternalserverModel = (props: InternalserverModelProps) => {
    const { showModal, toggle, description, imgPath } = props;

    const [timer, setTimer] = useState(9);

    useEffect(() => {
        setInterval(() => {
            setTimer(prev => {
                if (prev === 0) {
                    toggle();
                    return 0;
                }
                return prev - 1
            });
        }, 1000)
    }, [])

    return (
        <Modal size="md" isOpen={showModal} centered={true}
            className='add-employee-model confirmation-modal'
        >
            <div className="modal-header d-block">
                <div>
                    <img className="w-100" src={imgPath} alt="error" />
                </div>
                <h1 className='title mt-4'>{description}</h1>
            </div>
        </Modal >
    )
}

export default InternalserverModel