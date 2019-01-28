<?php

namespace App\Traits;

use Illuminate\Support\Facades\File;
use Intervention\Image\Facades\Image;

/**
 * Trait File.
 */
trait FileManager
{
    /**
     * Check if extension is image.
     *
     * @param $extension string extension.
     *
     * @return bool
     */
    public function isImagePath($extension)
    {
        return in_array(mb_strtolower($extension), ['png', 'jpg', 'jpeg', 'gif']);
    }

    /**
     * http://image.intervention.io/api/resize
     *
     * @param $extension
     * @param $inputFileRequest
     * @param $width
     * @param $height
     * @param $outputDirName
     * @param $outputFileName
     *
     * @return null|string
     */
    public function resizeAndStoreImageFile($extension, $inputFileRequest, $width, $height, $outputDirName, $outputFileName)
    {
        if (!$this->isImagePath($extension)) {
            return NULL;
        }

        $image = Image::make($inputFileRequest);
        if ($height == 'ratio' && is_int($width) && $image->width() > $width) {
            $image = $image->resize($width, NULL, function ($constraint) {
                $constraint->aspectRatio();
            });
        } else {
            if ($width == 'ratio' && is_int($height) && $image->height() > $height) {
                $image = $image->resize(NULL, $height, function ($constraint) {
                    $constraint->aspectRatio();
                });
            } else {
                if (is_int($width) && is_int($height) && ($image->height() > $height || $image->width() > $width)) {
                    $image = $image->resize($width, $height, function ($constraint) {
                    });
                }
            }
        }
        $dirPath = storage_path('app/public/' . $outputDirName);
        File::isDirectory($dirPath) || File::makeDirectory($dirPath, 0777, TRUE, TRUE);
        $image->save(storage_path('app/public/' . $outputDirName . '/' . $outputFileName));

        return $outputDirName . '/' . $outputFileName;
    }

}
