import path from 'path';
import chokidar from 'chokidar';
import sharp from 'sharp';

const rootDir = './src/client/assets/img/';
const breakpoints = [480, 768, 992, 1200, 1920];

chokidar.watch('source', { cwd: rootDir, persistent: true }).on('add', (filePath) => {
	const fileName = path.basename(filePath);
	const fileExtension = path.extname(fileName);
	const fileNameWithoutExtension = path.basename(filePath, fileExtension);

	for (let index = 0; index < breakpoints.length; index += 1) {
		const size = breakpoints[index];
		sharp(rootDir + filePath)
			.resize(size)
			.toFile(`${rootDir + fileNameWithoutExtension}_${size}.webp`);

		sharp(rootDir + filePath)
			.resize(size)
			.toFile(`${rootDir + fileNameWithoutExtension}_${size}${fileExtension}`);
	}
});
