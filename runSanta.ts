import { Santa } from "./index";
import {Sled} from "./index";
import { Bag } from "./index";
import { Present } from "./index";
import { BagType } from "./index";
import { PresentType } from "./index";

const santa1 = new Santa("John", 62);
const sled1 = new Sled (santa1);

const bag1 = new Bag(10, BagType.Canvas);
const present1= new Present("car",8, PresentType.Hard );
const present2= new Present("teddy bear",3, PresentType.Soft);

bag1.addPresent(present1);
bag1.addPresent(present2);

sled1.addBag(bag1);