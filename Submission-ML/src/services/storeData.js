const { Firestore } = require('@google-cloud/firestore');

async function storeData(id, data) {
<<<<<<< HEAD
  const db = new Firestore();

  const predictCollection = db.collection("predictions");
=======
  const db = new Firestore({
    databaseId: 'predictions',
    projectId: 'submissionmlgc-galangbuana',
    databaseId: 'predictions', 
    keyFilename: "./submissionmlgc-galangbuana-c3f00ad8f79f.json",
  });

  if (!db) {
    console.log("gagal terhubung ke filestore", db);
  } else {
    console.debug("Berhasil terhubung ke Firestore");
  }

  const predictCollection = db.collection('predictions');
>>>>>>> daac1d8544d0aff2dda7380efdca0689bbe86e83
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;
