var React = require('react');
var ReactNative = require('react-native');
var {
    StyleSheet,
    View,
    Image,
} = ReactNative;
/root/exhibitionApp/apache-tomcat-7.0.53/webapps/download/exhibition.apk

var Button = require('@remobile/react-native-simple-button');
var RCTContacts = require('@remobile/react-native-contacts');

var {
    contacts,
    ContactFindOptions,
    ContactField,
} = RCTContacts;

module.exports = React.createClass({
    testFind() {
        // display the address information for all contacts
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                var item = contacts[i];
                console.log(item);
            }
        };
        function onError(contactError) {
            alert('onError!');
        };
        // find all contacts
        var options = new ContactFindOptions();
        options.filter = "";
        options.multiple = false;
        var fields = ["displayName", "addresses"];
        contacts.find(fields, onSuccess, onError, options);
    },
    testSave() {
        // create a new contact
        var contact = contacts.create();

        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
        contact.nickname = "fang";

        // save the contact
        contact.save();
    },
    testRemove() {
        // display the address information for all contacts
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                var item = contacts[i];
                item.remove();
            }
        };
        function onError(contactError) {
            alert('onError!');
        };
        // find all contacts
        var options = new ContactFindOptions();
        options.filter = "fang";
        options.multiple = true;
        var fields = ["nickname"];
        contacts.find(fields, onSuccess, onError, options);
    },
    pickContact() {
        contacts.pickContact(function(contact){
            console.log('The following contact has been selected:', contact);
        },function(err){
            console.log('Error: ' + err);
        });
    },
    chooseContact() {
        contacts.chooseContact(function(contact){
            console.log('The following contact has been selected:', contact);
        },function(err){
            console.log('Error: ' + err);
        });
    },
    newContactUI() {
        contacts.newContactUI(function(contact){
            console.log('The following contact has been selected:', contact);
        },function(err){
            console.log('Error: ' + err);
        });
    },
    render() {
        return (
            <View style={styles.container}>
                <Button onPress={this.testFind}>
                    testFind
                </Button>
                <Button onPress={this.testSave}>
                    testSave
                </Button>
                <Button onPress={this.testRemove}>
                    testRemove
                </Button>
                <Button onPress={this.pickContact}>
                    pickContact
                </Button>
                <Button onPress={this.chooseContact}>
                    (ios)chooseContact
                </Button>
                <Button onPress={this.newContactUI}>
                    (ios)newContactUI
                </Button>
            </View>
        );
    },
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
    }
});
