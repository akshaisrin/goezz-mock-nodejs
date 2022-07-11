exports.sendCode = async (req, res) => {
    try {
        const { phoneNumber } = req.body;
        res.status(200).json({
            message: `Successfully received number: ${phoneNumber}`
        })
    }
    
    catch {
        throw new Error('Error: Could not send code')
    }
}