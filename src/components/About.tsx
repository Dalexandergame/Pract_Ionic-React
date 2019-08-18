import React, {useState} from 'react';
import { IonHeader, IonToolbar, IonMenuButton, IonTitle, IonButton, IonAlert, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon, IonItem, IonLabel } from '@ionic/react';

export const About: React.FC = () => {
    const [showAlert5, setShowAlert5] = useState(false);
    return(
        <>
        <IonHeader>
            <IonToolbar>
                <IonMenuButton slot="start"/>
                <IonTitle>About</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    Keep close to Nature's Heart... and break clear away, once in a while,
                    and climb a mountain or spend a week in the woods. Wash your Spirit clean.
                </IonCardContent>
            </IonCard>

            <IonCard>
                <IonItem>
                    <IonIcon name="pin" slot="start"/>
                    <IonLabel>ion-item in a card, icon left, button right</IonLabel>
                    <IonButton onClick={() => setShowAlert5(true)} fill="outline" slot="end">View</IonButton>
                    <IonAlert
                        isOpen={showAlert5}
                        onDidDismiss={() => setShowAlert5(false)}
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
        
                </IonItem>

                <IonCardContent>
                This is content, without any paragraph or header tags,
                within an ion-cardContent element
                </IonCardContent>
            </IonCard>

            <IonCard>
                <IonItem href="#" class="activated">
                    <IonIcon name="wifi" slot="start" />
                    <IonLabel>Card Link Item 1 .activated</IonLabel>
                </IonItem>
                <IonItem href="#">
                    <IonIcon name="wine" slot="start" />
                    <IonLabel>Card Link Item 2</IonLabel>
                </IonItem>
                <IonItem class="activated">
                    <IonIcon name="warning" slot="start" />
                    <IonLabel>Card Button Item 1 .activated</IonLabel>
                </IonItem>
            </IonCard>
            
        </IonContent>
        </>
    );
}
export default About;