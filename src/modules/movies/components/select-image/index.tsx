import { Dialog, DialogTrigger, DialogContent } from "@/shared/components/ui/dialog"
import { Button } from "@/shared/components/ui/button"
import { useEffect, useRef, useState } from "react"
import { useAuth } from "@/shared/contexts/auth-context"
import { getImagesService } from "../../services/images-list-service"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/components/ui/tabs"
import { toast } from "sonner"
import { uploadImageService } from "../../services/upload-image-service"

type Props = {
  setImageUrl: (url: string) => void
}

export function ImageUploadModal({ setImageUrl }: Props) {
  const { user } = useAuth()
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [images, setImages] = useState<{ key: string; url: string }[] | null>(null)
  const [selectedImage, setSelectedImage] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useEffect(() => {
    if (user) {
      fetchImages(user)
    }
  }, [selectedImage])

  const fetchImages = async (token: string) => {
    const imagesData = await getImagesService(token)

    setImages(imagesData)
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  const handleSelect = (url: string) => {
    setSelectedImage(url)
    setImageUrl(url)
    setOpen(false)
  }

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  const onUpload = async () => {
    if (selectedFile && user) {
      try {
        const result = await uploadImageService(selectedFile, user)
        console.log(result.url)
        toast(result.message)
        setImageUrl(result.url)
        setSelectedFile(null)
        setSelectedImage(result.url)
        setOpen(false)
      } catch (err) {
        const errorMessage = err as string
        toast(errorMessage)
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="flex flex-col gap-4">
        {selectedImage && (
          <Card className="self-center">
            <div className="relative h-48 overflow-hidden rounded">
              <img
                src={selectedImage}
                alt="imagem do filme"
                className="h-full w-auto object-cover"
                loading="lazy"
              />
            </div>
          </Card>
        )}
        <DialogTrigger asChild>
          <Button>Upload de Imagem</Button>
        </DialogTrigger>
      </div>
      <DialogContent className="sm:max-w-[425px]">
        <Tabs defaultValue="select">
          <TabsList>
            <TabsTrigger value="select">Selecionar Imagem</TabsTrigger>
            <TabsTrigger value="upload">Upload de Imagem</TabsTrigger>
          </TabsList>
          <TabsContent value="select">
            <Card>
              <CardHeader>
                <CardTitle>Selecione a imagem</CardTitle>
              </CardHeader>
              <CardContent>
                {!!images && (
                  <div className="mb-4 grid grid-cols-3 gap-4 px-4">
                    {images.map((image: any) => (
                      <div
                        key={image.key}
                        className={`cursor-pointer rounded-md border-4 ${
                          selectedImage === image.url ? "border-blue-500" : "border-transparent"
                        }`}
                        onClick={() => handleSelect(image.url)}
                      >
                        <img
                          src={image.url}
                          alt="Imagem para selecionar"
                          className="h-auto w-full rounded-md"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload de Imagem</CardTitle>
                <CardDescription>
                  Escolha uma imagem para enviar, mas conseguira enviar apenas images .jpg, .png.
                  web com tamanho máximo de 5MB.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <input
                  type="file"
                  ref={inputRef}
                  accept="image/*"
                  onChange={onFileChange}
                  style={{ display: "none" }}
                  name="upload-image"
                />

                {!!selectedFile && (
                  <div className="mb-4">
                    <p>Arquivo selecionado: {selectedFile.name ? selectedFile.name : "Nenhum"}</p>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Preview"
                      className="max-h-40 max-w-full rounded-md border object-contain"
                    />
                  </div>
                )}

                {!selectedFile && (
                  <Button variant="outline" onClick={handleClick}>
                    Selecionar
                  </Button>
                )}
              </CardContent>
              <CardFooter className="gap-4">
                <Button disabled={!selectedFile} onClick={onUpload}>
                  Enviar
                </Button>

                <Button variant="outline" onClick={() => setSelectedFile(null)}>
                  Limpar
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

{
}
