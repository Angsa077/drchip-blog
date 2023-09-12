import fs from 'fs';
import path from 'path';

const fileRemover = (filename) => {
    fs.unlink(path.join(__dirname, "../uploads", filename), function (err){ 
        if (err & err.code == "ENOENT") {
            //file doesn't exist
            console.log(`File ${filename} tidak tersedia, tidak akan dihapus.`);
        } else if (err) {
            console.log(err.message);
            console.log(`Terjadi kesalahan saat menghapus file ${filename}`);
        } else {
            console.log(`Hapus ${filename}`);
        }
    });
};

export { fileRemover };