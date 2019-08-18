import React from 'react';
import { IonSlides, IonSlide, IonContent, IonHeader, IonToolbar, IonTitle, IonMenuButton } from '@ionic/react';

//Optional parameters to pass to the swiper instance.
const slideOpts = {
    initialSlide: 1,
    speed: 400
};

export const Support: React.FC = () => {
    return(
    <>
        <IonHeader>
            <IonToolbar>
                <IonMenuButton slot="start"/>
                <IonTitle>Support</IonTitle>
            </IonToolbar>
        </IonHeader>
        
        <IonContent>
            <IonSlides pager={true} options={slideOpts}>
                <IonSlide>
                    <h1>Slide 1</h1>
                </IonSlide>
                <IonSlide>
                    <h1>Slide 2</h1>
                </IonSlide>
                <IonSlide>
                    <h1>Slide 3</h1>
                </IonSlide>
            </IonSlides>
        </IonContent>
    </>
    );
}

export default Support;