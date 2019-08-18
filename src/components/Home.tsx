import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonIcon, IonItem, IonMenuButton} from '@ionic/react';

const Home = () => (
    <>
        <IonHeader>
            <IonToolbar>
                <IonMenuButton slot="start"/>
                <IonTitle>Home</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonItem>
                    <IonIcon name="paper-plane" slot="start"/>
                    Paper Plane
                </IonItem>
                <IonItem>
                    <IonIcon name="musical-notes" slot="start"/>
                    Music
                </IonItem>
                <IonItem>
                    <IonIcon name="cafe" slot="start"/>
                    Cup
                </IonItem>
            </IonList>
        </IonContent>
    </>
);

export default Home;