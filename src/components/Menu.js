import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonButtons, IonMenuButton, IonMenuToggle } from '@ionic/react';
import { withRouter } from 'react-router-dom';

const Menu = ({history}) => (
    
    <IonMenu contentId="main">
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Start Menu</IonTitle>
                <IonButtons slot="start">
                    <IonMenuButton autoHide={false}></IonMenuButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonList>
                <IonMenuToggle><IonItem onClick={() => history.push('/')}>Home</IonItem></IonMenuToggle>
                <IonMenuToggle><IonItem onClick={() => history.push('/about')}>About</IonItem></IonMenuToggle>
                <IonMenuToggle><IonItem onClick={() => history.push('/support')}>Support</IonItem></IonMenuToggle>
                <IonMenuToggle><IonItem onClick={() => history.push('/extras')}>Extras</IonItem></IonMenuToggle>
            </IonList>
        </IonContent>
    </IonMenu>

);

export default withRouter(Menu);