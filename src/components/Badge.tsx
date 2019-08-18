import React from 'react';
import { IonBadge, IonItem, IonLabel, IonContent } from '@ionic/react';

export const Badge: React.FC = () => {
    return (
        <IonContent>

            {/*-- Default --*/}
            <IonBadge>99</IonBadge>
            
            {/*-- Colors --*/}
            <IonBadge color="primary">11</IonBadge>
            <IonBadge color="secondary">22</IonBadge>
            <IonBadge color="tertiary">33</IonBadge>
            <IonBadge color="success">44</IonBadge>
            <IonBadge color="danger">55</IonBadge>

            {/*-- Item with badge on left and right --*/}
            <IonItem>
                <IonBadge slot="start">11</IonBadge>
                <IonLabel>My Item</IonLabel>
                <IonBadge slot="end">44</IonBadge>
            </IonItem>
        </IonContent>
    );
}

export default Badge;