"use client"

import { Dialog, DialogContent } from '@radix-ui/react-dialog'
import {Input} from '@/components/ui/input'
import React, {useState} from 'react'



const AuthModel = () => {

    const[isOpen, setIsOpen] = useState(false)



    
    return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <Input />
        </DialogContent>
      </Dialog>
  )
}

export default AuthModel