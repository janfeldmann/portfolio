import path from 'path';
import fs from 'fs';
import chokidar from 'chokidar';
import sharp from 'sharp';
import config from '../../config/config';

const rootDir = './src/client/assets/img/';
const breakpoints = [480, 768, 992, 1200, 1920];
const targetDir = `${config.paths.publicDir}assets/img/`;

export default chokidar.watch('source', { cwd: rootDir, persistent: true }).on('add', (filePath) => {
	const fileName = path.basename(filePath);
	const fileExtension = path.extname(fileName);
	const fileNameWithoutExtension = path.basename(filePath, fileExtension);

	fs.mkdir(targetDir, { recursive: true }, (err) => {
		for (let index = 0; index < breakpoints.length; index += 1) {
			const size = breakpoints[index];
			sharp(rootDir + filePath)
				.resize(size)
				.toFile(`${targetDir + fileNameWithoutExtension}_${size}.webp`);

			sharp(rootDir + filePath)
				.resize(size)
				.toFile(`${targetDir + fileNameWithoutExtension}_${size}${fileExtension}`);
		}
	});
});
