const numValidPassphrases = isValid => passphraseList => {
  const passphrases = passphraseList.split('\n');
  return passphrases.filter(isValid).length;
};

module.exports = numValidPassphrases;
