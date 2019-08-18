import React, { useState } from 'react'
import { IonHeader, IonToolbar, IonTitle, IonAlert, IonButton, IonContent, IonMenuButton } from '@ionic/react';


export const Extras: React.FC = () => {
    const [showAlert1, setShowAlert1] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const [showAlert3, setShowAlert3] = useState(false);
    const [showAlert4, setShowAlert4] = useState(false);

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonMenuButton slot="start"/>
                    <IonTitle>Support</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonButton onClick={() => setShowAlert1(true)} expand="block" fill="outline">Show Alert 1</IonButton>
                <IonButton onClick={() => setShowAlert2(true)} expand="block" fill="clear">Show Alert 2</IonButton>
                <IonButton onClick={() => setShowAlert3(true)} expand="block" fill="solid">Show Alert 3</IonButton>
                <IonButton onClick={() => setShowAlert4(true)} expand="block" size="small">Show Alert 4</IonButton>
                <IonAlert
                    translucent={true}
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    header={'Alert'}
                    subHeader={'Subtitle'}
                    message={'This is an alert message.'}
                    buttons={['OK']}
                    
                />
                <IonAlert
                    isOpen={showAlert2}
                    onDidDismiss={() => setShowAlert2(false)}
                    header={'Alert'}
                    subHeader={'Subtitle'}
                    message={'This is an alert message.'}
                    buttons={['Cancel', 'Open Modal', 'Delete']}
                />
                <IonAlert
                    isOpen={showAlert3}
                    onDidDismiss={() => setShowAlert3(false)}
                    header={'Prompt!'}
                    inputs={[
                        {
                            name: 'name1',
                            type: 'text',
                            placeholder: 'Placeholder 1'
                        },
                        {
                            name: 'name2',
                            type: 'text',
                            id: 'name2-id',
                            value: 'hello',
                            placeholder: 'Placeholder 2'
                        },
                        {
                            name: 'name3',
                            value: 'http://ionicframework.com',
                            type: 'url',
                            placeholder: 'Favourite site ever'
                        },
                        // input date with min & max
                        {
                            name : 'name4',
                            type: 'date',
                            min: '2017-03-01',
                            max: '2019-03-01'
                        },
                        // input date without min nor max
                        {
                            name: 'name5',
                            type: 'date'
                        },
                        {
                            name: 'name 6',
                            type: 'number',
                            min: -5,
                            max: 10
                        },
                        {
                            name: 'name 7',
                            type: 'number'
                        }
                    ]}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                console.log('Confirm Cancel');
                            }
                        },
                        {
                            text: 'ok',
                            handler: () => {
                                console.log('Confirm Ok');
                            }
                        }
                    ]}
                />
                <IonAlert
                    isOpen={showAlert4}
                    onDidDismiss={() => setShowAlert4(false)}
                    header={'Radio'}
                    inputs= {[
                        {
                            name: 'radio1',
                            type: 'radio',
                            label: 'Radio 1',
                            value: 'value1',
                            checked: true
                        },
                        {
                            name: 'radio2',
                            type: 'radio',
                            label: 'Radio 2',
                            value: 'value2'
                        },
                        {
                            name: 'radio3',
                            type: 'radio',
                            label: 'Radio 3',
                            value: 'value3' 
                        }
                    ]}
                    buttons={[
                        {
                            text: 'Cancel',
                            role: 'cancel',
                            cssClass: 'secondary',
                            handler: () => {
                                console.log('Confirm Cancel');
                            }
                        },
                        {
                            text: 'Ok',
                            handler: () => {
                                console.log('Confirm Ok');
                            }
                        }
                    ]}
                    
                />
            </IonContent>
        </>
    );
  }

export default Extras;