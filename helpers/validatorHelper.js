exports.checkIfValid = (validationResult) => {
  if (!validationResult.isEmpty()) {
    return res.status(422).json({ message: 'invalid data', errors: errors.array() });
  };
}
