/*
    You are working on an SMS Gateway project.
    An SMS can have a maximum of 140 characters per message.
    Split the message into multiple messages of max. 140 characters if needed.
    Implement the prepareMessage() function to return an array of messages.
*/

const MAX_MESSAGE_LEN = 140

class SMSGateway {

    /**
     * Split a message into 140-character chunks.
     * 
     * @param {string} message
     * @returns {string[]}
     */
    static prepareMessage(message) {
        if(message.length <= MAX_MESSAGE_LEN) return [message]
        const messages = []
        const tempMessage = message.split('')
        while(tempMessage.length > 0) {
            const messagePart = tempMessage.splice(0, MAX_MESSAGE_LEN).join('')
            messages.push(messagePart)
        } 
        return messages
    }

    /**
     * Send an array of messages via the `SMSClient`.
     * 
     * @param {string[]} messages
     */
	static send(messages) {
        prepareMessage().forEach(SMSClient.send)
    }
}

class SMSClient {
    static send() {
        // Assume this is already implemented
    }
}

const text1 = 'Hello World'
console.log(SMSGateway.prepareMessage(text1))

const text2 = 'GMuFaLLTJYb0oHkHbuoMxKjFcNueNeBrhkV1qXFasJXramJviLpdxDIodWAxYQ9CsRPFoWObYb2XpHe3rC0v9dzvg7gX3YwtTLcq9lmciLqAPy12CfbFlVa0G1PtVSGNM6Yyf995drtDcctl1ymPnT'
const [part1, part2] = SMSGateway.prepareMessage(text2)
console.log(part1.length === 140, part2.length === 10)