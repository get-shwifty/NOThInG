if (this.MOpenable.isOpen() && !this.isOpening){
    playAnimation(this, 'Porte_Ouverture', 0.15)
    this.loop = false;
    this.isOpening = true;
}
else if(!this.MOpenable.isOpen() && !this.isOpening){
    playAnimation(this, 'Porte_Fermeture', 0.15)
    this.loop = false;
    this.isOpening = true;
}