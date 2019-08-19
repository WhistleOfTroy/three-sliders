import React from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

export default class App extends React.Component {
  state = {
    qualityValue: 30,
    quantityValue: 30,
    speedValue: 30,
  };
  render() {
    slider = (value, name) => {
      var maxPercentage = 100;
      var sum = this.state.qualityValue + this.state.quantityValue + this.state.speedValue;
      var newQuantityValue = maxPercentage - this.state.speedValue - this.state.qualityValue;
      if (newQuantityValue < 0) { newQuantityValue = 0 };
      var newspeedValue = maxPercentage - this.state.quantityValue - this.state.qualityValue;
      if (newspeedValue < 0) { newspeedValue = 0 }
      var newQualityValue = maxPercentage - this.state.quantityValue - this.state.speedValue;
      if (newQualityValue < 0) { newQualityValue = 0 };
      if (sum > maxPercentage) {
        if (name == 'Quality') {
          this.setState({
            quantityValue: newQuantityValue,
            qualityValue: value,
            speedValue: newspeedValue
          });
        }
        else if (name == 'Quantity') {
          this.setState({
            quantityValue: value,
            qualityValue: newQualityValue,
            speedValue: newspeedValue
          });
        }
        else if (name == 'Time') (
          this.setState({
            quantityValue: newQuantityValue,
            qualityValue: newQualityValue,
            speedValue: value
          })
        )
      }
    }
    return (
      <View style={styles.container}>
        <Text style={styles.descriptionText}> Select desired characteristics for the product.</Text>
        <View style={styles.paddingView}></View>

        <Text style={styles.nameText}>Quality</Text>
        <Slider minimumValue={0} maximumValue={100}
          value={this.state.qualityValue}
          onValueChange={(value) => this.setState({ qualityValue: value })}
          onValueChange={(value) => slider(value, 'Quality')}
          onSlidingComplete={(value) => this.setState({ qualityValue: value })} ></Slider>
        <Text style={styles.valueText}>{Math.round(this.state.qualityValue)} %</Text>

        <View style={styles.paddingView}></View>

        <Text style={styles.nameText}>Quantity</Text>
        <Slider minimumValue={0} maximumValue={100} value={this.state.quantityValue}
          onValueChange={(value) => this.setState({ quantityValue: value })}
          onValueChange={(value) => slider(value, 'Quantity')}
          onSlidingComplete={(value) => this.setState({ quantityValue: value })} ></Slider>
        <Text style={styles.valueText}>{Math.round(this.state.quantityValue)} % </Text>

        <View style={styles.paddingView}></View>

        <Text style={styles.nameText}>Speed</Text>
        <Slider minimumValue={0} maximumValue={100}
          value={this.state.speedValue}
          onValueChange={(value) => this.setState({ speedValue: value })}
          onValueChange={(value) => slider(value, 'Price')}
          onSlidingComplete={(value) => this.setState({ speedValue: value })}></Slider>
        <Text style={styles.valueText}>{Math.round(this.state.speedValue)} %</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  paddingView: {
    height: 30,
  },
  descriptionText: {
    alignSelf: 'center',
    fontSize: 15
  },
  nameText: {
    alignSelf: 'center',
    fontSize: 20
  },
  valueText: {
    alignSelf: 'center',
  }
},
);
